define('components/contactForm', [
    'jquery',
    'services/contactService',
    'services/dateService'
  ], function($, contactService, dateService){

    var CONTACT_FORM_SENDING_CSS_CLASS = 'form-sending';
    var CONTACT_FORM_SUCCESS_MESSAGE = 'Success! You\'ll get a reply soon.';
    var CONTACT_FORM_ERROR_MESSAGE = 'Ops! We got some error. Please, try again.';

    var _public = {};
    var contactFormAlertElement, contactFormElement, requesting;

    _public.init = function(){
      bindElements();
    }

    function bindElements(){
      contactFormAlertElement = $('[data-js=contact-form-alert]');
      contactFormElement = $('[data-js="contact-form"]');

      contactFormElement.on('submit', onContactFormSubmit)
    }

    function onContactFormSubmit(evt){
      evt.preventDefault();

      if(!requesting){
        requesting = true;
        contactFormElement.addClass(CONTACT_FORM_SENDING_CSS_CLASS);
        clearAlert();
        sendFormData();
      }
    }

    function sendFormData(){
      contactService.send({
        Name: getContactData('name'),
        Email: getContactData('email'),
        Message: getContactData('message'),
        Sent_At: dateService.getFormattedDateAndTime(new Date())
      }).then(onSendSuccess ,onSendError);
    }

    function getContactData(data){
      return getContactField(data).val();
    }

    function resetContactFormField(field){
      return getContactField(field).val('');
    }

    function getContactField(field){
      return $('[data-js=contact-' + field + ']');
    }

    function onSendSuccess(){
      onSendComplete();
      resetContactFormField('name');
      resetContactFormField('email');
      resetContactFormField('message');
      setContactFormAlert('success', CONTACT_FORM_SUCCESS_MESSAGE);
    }

    function onSendError(){
      onSendComplete();
      setContactFormAlert('error', CONTACT_FORM_ERROR_MESSAGE);
    }

    function onSendComplete(){
      requesting = false;
      contactFormElement.removeClass(CONTACT_FORM_SENDING_CSS_CLASS);
    }

    function clearAlert(){
      setContactFormAlert(null, '');
    }

    function setContactFormAlert(alertType, alertMessage){
      contactFormAlertElement.removeClass('alert-hidden alert-error alert-success');

      if(alertType)
        contactFormAlertElement.addClass(['alert',alertType].join('-'));
      else
        contactFormAlertElement.addClass('alert-hidden');

      contactFormAlertElement.text(alertMessage);
    }

    return _public;

});
