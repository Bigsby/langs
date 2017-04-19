global  _main
extern  _printf

section .text
_main:
    push    message
    call    _printf
    add     esp, 4
    ret
message:
    db  'Hello, World!', 0

;> nasm -f win32 hello.asm && gcc hello.obj -o hello & hello.exe