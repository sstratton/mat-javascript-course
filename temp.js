// Handling Asynchronous functions

first(second) // callbacks

first().then(
    second().then(
        third().then(
            forth(), 
            "error handline"
        )
    , "error handline")
    , "error handling") // returning promises and handling them with a 'then' statement

async function runner(){

    printName()
    await first();
    await second();
    await third();

} // handling promises using async/await - ES6