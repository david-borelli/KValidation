const KValidation = {};

KValidation.validateEmail = (function () {
  const defaultRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g;

  function fnEmailValidation(emailParam, regexPattern = defaultRegex) {
    if (typeof emailParam === "undefined")
      return Error("You must enter an e-mail by parameter");

    const isVAlid = regexPattern.test(emailParam);
    return isVAlid;
  }

  return fnEmailValidation;
})();

KValidation.compareSimpleObjects = (function () {
  function isArrayOrNotObject(itemForVerify) {
    if (typeof itemForVerify !== "object" || Array.isArray(itemForVerify))
      return true;
  }

  function fnCompareObjects(firstObject = {}, secondObject = {}) {
    const aNotOk = isArrayOrNotObject(firstObject);
    const bNotOk = isArrayOrNotObject(secondObject);

    if (aNotOk || bNotOk) {
      return Error("To compare, there must be two objects");
    }

    const aProps = Object.getOwnPropertyNames(firstObject);
    const bProps = Object.getOwnPropertyNames(secondObject);

    if (aProps.length != bProps.length) {
      return false;
    }

    for (let i = 0; i < aProps.length; i++) {
      let propName = aProps[i];

      if (firstObject[propName] !== secondObject[propName]) {
        return false;
      }
    }

    return true;
  }

  return fnCompareObjects;
})();

(function () {
  const { validateEmail, compareSimpleObjects } = KValidation;

  const isValidEmail = validateEmail("david");
  const equalsObject = compareSimpleObjects({ a: 1, b: 2 }, { a: 1, b: 2 });

  console.log("isValidEmail", isValidEmail);
  console.log("equalsObject", equalsObject);
})();
