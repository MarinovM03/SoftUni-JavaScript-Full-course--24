function matchFullName(text) {
    const regExp = /\b[A-Z][a-z]+ \b[A-Z][a-z]+/g;

    const result = text.match(regExp);
    console.log(result.join(' ')); 
}

matchFullName('Ivan Ivanov, ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	 Ivanov');