type Hero = {
    name: string,
    nick: string
}

const printObject = (person: Hero): void => {
    console.log(person);
}

printObject({
    name: "Bruce Wayne",
    nick: "Batman"
});