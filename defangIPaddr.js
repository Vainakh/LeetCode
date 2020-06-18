let address = "1.1.1.1"
const defangIPaddr = (address) => {
    let test = address.split(".").join("[.]");
    return test;
};


console.log(defangIPaddr(address));