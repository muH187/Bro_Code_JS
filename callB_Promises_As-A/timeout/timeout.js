function greeting() {
    console.log("Hello Muhammad Ali! How are you?");
}

setTimeout(greeting, 2000)

function answer() {
    console.log("Hi! Thanks for asking, I'm fine what about you?");
}

setTimeout(answer, 4000)

// Another way to write a timeout function

setTimeout(() => {
    console.log("Hi I'm learning Javascript")
}, 5000)
