console.log(
  ["baby shark", "mummy shark", "daddy shark", "grandpa shark", "grandma shark"].reduce((shark, el) => {
    let sharks = `${el} ${" do ".repeat(4)}. \n`.repeat(3);
    shark += sharks
    return shark + `${el}. \r`;
  }, ""));
