export class Clipboard {
    static _data: string = null;
    static POS = !!window['clipboardData'];

    static init() {
        window.addEventListener('copy', function (e: ClipboardEvent) {
            if (Clipboard._data) {
                e.clipboardData.setData('text/plain', Clipboard._data);
                e.preventDefault();
                Clipboard._data = null;
            }
        });
    }

    static copy = (data: string): void => {
        if (navigator.platform.startsWith("Win"))
            data = data.replace(/(?:\r\n|\r|\n)/g, "\r\n");

        Clipboard._data = data;

        if (!Clipboard.POS) {
            document.execCommand('copy')
        }
        else if (!!window['clipboardData']) {
            window['clipboardData'].setData('Text', Clipboard._data);
        }
    }
}

Clipboard.init();