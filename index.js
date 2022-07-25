// Write your code here!



  document.querySelector('main').remove();

  /*it("has a 'newHeader' variable that points to an <h1> node, 'h1#victory'", () => {
    expect(
      newHeader.nodeName,
      "Make sure you create an <h1> with id 'victory'"
    ).eql("H1");*/

    const newHeader = document.createElement('h1');

    newHeader.id = 'victory';
    newHeader.innerHTML = "YOUR-NAME is the champion"

    document.body.appendChild(newHeader);