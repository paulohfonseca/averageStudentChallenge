let students = [
    {
        name: "Paulo",
        note1: 8,
        note2: 9.5,
    },
    {
        name: "João",
        note1: 6,
        note2: 7.5,
    },
    {
        name: "Juliana",
        note1: 5,
        note2: 3.5,
    },
    {
        name: "Rita",
        note1: 10,
        note2: 9,
    },
]

function mediaNote(a, b) {
    return ((a + b) / 2).toFixed(1) 
}

function printMediaStudent(student) {
    if(mediaNote(student.note1, student.note2) > 7) {
        alert(`
            A média do(a) aluno(a) ${student.name} é: ${mediaNote(student.note1, student.note2)}.
            Parabéns, ${student.name}! Você foi aprovado(a) no concurso!
        `)
    } else {
        alert(`
            A média do(a) aluno(a) ${student.name} é: ${mediaNote(student.note1, student.note2)}.
            Não foi dessa vez, ${student.name}! Tente novamente!
        `)
    }
}

for(let student of students) {
    printMediaStudent(student)
}