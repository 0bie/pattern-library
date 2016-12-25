const action = 'Submit';
const placeholder = 'Your Email Address';
const message = 'An opt-in (confirmation) message';
export const markup = `<div class="Subscribe__container" id="form">
    <header>
        <h1 class="txt--center">${action} Form</h1>
    </header>
    <div class="Subscribe">
        <form class="form">
            <label class="label form__label">
                <span class="hidden">${placeholder}</span>
                <input class="input form__input border" type="email" name="subscribe_email" placeholder="${placeholder}" required></input>
            </label>
            <input class="button form__button" type="submit" value="${action}"></input>
            <div class="form__checkbox">
                <input class="input_Subscribe hidden" type="checkbox" name="subscribe_form" id="subscribe_form" checked></input>
                <label class="label form__label_checkbox" for="subscribe_form">
                    ${message}
                </label>
            </div>
        </form>
        <!-- <div class="form__message">
        <h3>Thanks! We'll be in touch!</h3>
        </div> -->
    </div>
</div>`;