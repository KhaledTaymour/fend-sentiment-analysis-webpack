const post = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const handleSubmit = async () => {
  console.log("inside handle submit");
  const url = document.querySelector(".url-input").value;

  if (client.validateURL(url)) {
    await post("http://localhost:8081/analyze-url", { url }).then((data) => {
      console.log("then in formhandler", data);
      document.querySelector(".analysis-results__agreement-value").textContent =
        data.agreement;
      document.querySelector(
        ".analysis-results__confidence-value"
      ).textContent = data.confidence;
      document.querySelector(".analysis-results__irony-value").textContent =
        data.irony;
      document.querySelector(".analysis-results__score_tag-value").textContent =
        data.score_tag;
      document.querySelector(
        ".analysis-results__subjectivity-value"
      ).textContent = data.subjectivity;
      document.querySelector(".analysis-results__text-value").textContent =
        data.text;
    });
  } else {
    alert("URL invalid");
  }
};
