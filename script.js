const deleteBtn = document.querySelectorAll('a')

const button = document.querySelector('#add-btn')
const task = document.querySelector('#txt-task')
const list = document.querySelector('#list')

button.addEventListener('click', e => {
    e.preventDefault()

    const div = document.createElement('div')
    div.className = 'list-item'

    const p = document.createElement('p')
    p.innerText = task.value

    const a = document.createElement('a')
    const i = document.createElement('i')

    i.classList.add('fas')
    i.classList.add('fa-trash')

    a.appendChild(i)

    a.className = 'delete-item'
    a.setAttribute('href', '#')

    a.addEventListener('click', e => {
        e.preventDefault()
        a.parentNode.remove()
    })

    div.appendChild(p)
    div.appendChild(a)

    list.appendChild(div)

    task.value = null
})

deleteBtn.forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault()
        btn.parentNode.remove()
    })
})