(function(d, w){
var mailtoForm = new mailto(document.getElementById('mailto-form'));
var formId = mailtoForm.form.getAttribute('data-spreadsheet-id');
var fields = ['entry.1910784286', 'entry.174408459'];



mailtoForm.onSubmit = function(m){
  var data = m.getData();
  console.log(m);

  w.location = m.getMailtoUrl();

  if ('localStorage' in w) {
    fields.forEach(function(f){
      localStorage[f] = data[f];
    });
  }

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://docs.google.com/forms/d/'+formId+'/formResponse', true);
  xhr.responseType = 'json';
  xhr.onload = function(){};
  xhr.send(m.getData());
};

fields.forEach(function(f){
  if (localStorage[f]) {
    d.querySelector('[name="'+f+'"]').value = localStorage[f];
  }
});

w['Cfp'] = mailtoForm;
})(document, window);