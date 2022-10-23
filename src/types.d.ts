//先宣告一個Declaration 全域變數  供每個檔案使用
//以todo當範例

interface Todo {
    text:string
    complete:boolean
}
//todo裡面一定要有甚麼type

type AddTodo = (text:string) => void
//新增一定要是一個只能放字串的function

type TaggleTodo = (index:number) => void
//新增一定要是一個只能放數字的function

type DeleteTodo = (index:number) => void
//新增一定要是一個只能放數字的function