let counter = 0;
let count = () => ++counter;
count.reset = () => (counter = 0);
