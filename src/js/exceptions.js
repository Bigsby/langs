function DoStuff(inError) {
    if (inError)
        throw new Error("An error occured!");

    console.log("Doing stuff!");
}

try {
    DoStuff(false);
    DoStuff(true);
    DoStuff(false); // not reached
} catch (error) {
    console.log("ERROR: " + error.message);
}

