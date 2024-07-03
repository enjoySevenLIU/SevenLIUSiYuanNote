const { Plugin, openTab } = require('siyuan');

const createDocWithMd = async(notebook, path, markdown) => {
    const d = {
        notebook,
        path,
        markdown
    };
    return fetch('/api/filetree/createDocWithMd', { method: 'POST', body: JSON.stringify(d) }).then(res => res.json()).then(v => v.data);
}

const lsNotebooks = async() => {
    return fetch('/api/notebook/lsNotebooks', { method: 'POST' }).then((res) => res.json());
}

module.exports = class OpenMd extends Plugin {
        async onload() {
            const electron = window.require('@electron/remote');
            const app = electron.app;


            app.setAsDefaultProtocolClient('md');
            app.on('second-instance', async(event, commandLine, workingDirectory) => {
                if (Array.isArray(commandLine) && commandLine.length > 0) {
                    const file = commandLine[commandLine.length - 1];
                    if (file && file.endsWith('.md')) {
                        const data = await this.loadFile(file);
                        const path = window.require('path');
                        const name = path.basename(file);
                        this.showFile(name, data);
                    }
                }
            });
        }

        async showFile(name, data) {
                const l = Lute.New();
                const content = l.Md2BlockDOM(data);
                const notebooks = await this.getNoteBooks();
                const createFile = this.createFile;
                const tab = this.addTab({
                            type: `openmd-${Math.random()}`,
                            init() {
                                this.element.innerHTML = `
                <div class="protyle fn__flex-1">
                    <div class="protyle-content">
                        <div class="protyle-wysiwyg protyle-wysiwyg--attr">
                        <div style="margin:20px 0">
                        <select id="selectNoteBook">
                        ${this.data.notebooks.map((n) => {
                    return `<option value="${n.id}">${n.name}</option>`
                }).join('\n')}
                        </select>
                        <button class="b3-button" id="saveTo">保存到笔记本</button>
                    </div>
                    ${this.data.content.replaceAll('contenteditable="true"', 'contenteditable="false"')}
                        </div>
                    </div>
                </div>`
                const save = () => {
                    const select = this.element.querySelector('#selectNoteBook');
                    const val = select.value;
                    createFile(name, data, val);
                }
                this.element.querySelector('#saveTo').addEventListener('click', save);
            },
        });
        const t = openTab({
            custom: {
                icon: '',
                title: name,
                data: {
                    name,
                    content,
                    notebooks,
                },
                fn: tab,
            },
        });
        console.log(t);
    }

    async createFile(name, data, id) {
        const newPath = '/' + name;
        const fileId = await createDocWithMd(id, newPath, data);
        window.open(`siyuan://blocks/${fileId}`);
    }

    async loadFile(file) {
        return new Promise((resolve, reject) => {
            const fs = window.require('fs');
            fs.readFile(file, 'utf-8', (err, data) => {
                if (err) {
                    return reject(err);
                }
                resolve(data.toString());
            });
        })
    }

    async getNoteBooks() {
        const res = await lsNotebooks();
        const notebooks = res.data.notebooks;
        // filter help notebook
        return notebooks.filter(v => v.id !== '20210808180117-czj9bvb').map((v) => {
            return { name: v.name, id: v.id };
        });
    }

}