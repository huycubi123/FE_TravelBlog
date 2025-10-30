import { callApi } from "./apiHelper.js";

var faqApi = "api/v1/faqs"
var jq = jQuery.noConflict();

jq(document).ready(async function() {
    await loadFaqs();
});

async function loadFaqs() {
    const response = await callApi({
        url: faqApi,
        method: "GET",
    });
    const result = response.result;
    let content = '';
    
    result.forEach(item => {
       content += `
            <article class="faq-accordion__item">
                <div class="faq-accordion__question">
                  <h2 class="faq-accordion__title">
                    ${item.question}
                  </h2>
                  <span class="faq-accordion__icon"></span>
                </div>
                <div class="faq-accordion__answer">
                  ${item.answer}
                </div>
            </article>
       `
    });

    jq('#faq-accordion').html(content);
}