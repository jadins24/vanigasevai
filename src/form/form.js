import "./form.scss";

export default function Form() {
  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbxrR-LdaOPmpWPVuKk3rdUxgnyUu0LlaaWFqm9DR4HPkZPNcBPvB7uVGm9bawcbVuvl/exec",
     
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="App">
      
      <div>
        <form className="form" onSubmit={(e) => Submit(e)}>
          <input placeholder="Your Name" name="Name" type="text" />
          <input placeholder="Your Phone" name="Phone" type="tel" />
          <input placeholder="Your Email" name="Email" type="text" />
          <input placeholder="Your Message" name="Message" type="textarea" />
          
          <input name="Name" type="submit" value={"SUBMIT"} className="btn" />
        </form>
      </div>
    </div>
  );
}
