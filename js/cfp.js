(function(d, w){
var mailtoForm = new mailto(document.getElementById('mailto-form'));
var formId = mailtoForm.form.getAttribute('data-spreadsheet-id');
var fields = ['entry.1910784286', 'entry.174408459'];
var mailBody = mailto.textContent(document.getElementById('mailto-body'));

function saveFields(fields, data){
  if ('localStorage' in w) {
    fields.forEach(function(f){
      localStorage[f] = data[f];
    });
  }
}

function restoreFields(fields){
  fields.forEach(function(f){
    if (localStorage[f]) {
      d.querySelector('[name="'+f+'"]').value = localStorage[f];
    }
  });
}

mailtoForm.formatter = function bracketFormatter(m){
  var data = m.getData();

  return mailBody.replace(/{{([^}]+)}}/g, function(m, key){
    return data[key] || '';
  });
};

mailtoForm.onSubmit = function(m){
  var formData = m.getFormData();
  var data = m.getData();
  var queryString = formData.map(function(f){
    return encodeURI(f.name) + '=' + encodeURI(f.value);
  }).join('&');

  saveFields(fields, data);

  var el = document.createElement('iframe');
  el.hidden = true;
  el.sandbox = '';
  el.src = 'https://docs.google.com/forms/d/'+formId+'/formResponse?'+queryString;

  el.onerror = function onFrameError(e){
    if (!(el.contentDocument || el.contentWindow.document || '').title.match('Thanks')){
      console.log('An error happened submitting the response');
    }
  };

  el.onload = function onSuccess(e){
    w.location = m.getMailtoUrl();
  };

  d.body.appendChild(el);
};

restoreFields(fields);

w['Cfp'] = mailtoForm;
})(document, window);