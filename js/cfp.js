(function(d, w){
var mailtoForm = new mailto(document.getElementById('mailto-form'));
var formId = mailtoForm.form.getAttribute('data-spreadsheet-id');
var fields = ['entry.1910784286', 'entry.174408459'];

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


mailtoForm.onSubmit = function(m){
  var formData = m.getFormData();
  var data = m.getData();
  var queryString = formData.map(function(f){
    return encodeURI(f.name) + '=' + encodeURI(f.value);
  }).join('&');

  saveFields(fields, data);

  var el = document.createElement('iframe');
  el.hidden = true;
  el.src = 'https://docs.google.com/forms/d/'+formId+'/formResponse?'+queryString;
  el.onload = function(e){
    if (!el.documentElement.title || el.documentElement.title.match('Thanks')){
      console.log('An error happened submitting the response');
    }

    w.location = m.getMailtoUrl();
  };

  d.body.appendChild(el);
};

restoreFields(fields);

w['Cfp'] = mailtoForm;
})(document, window);