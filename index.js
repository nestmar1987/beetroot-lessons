class Developer {  
  Конструктор ( Firstname , фамилия ) { 
    это . Firstname = Firstname ;
    это . фамилия = фамилия ;
  }
  getName ( ) { 
    верни это . имя + '' + это . фамилия ;    
  }
}
класс ReactDeveloper расширяет Developer {    
  getJob ( ) { 
    вернуть 'React Developer' ; 
  }
}
var me = new ReactDeveloper ( 'Robin' , 'Wieruch' ) ;   
консоль . log ( me . getName ( ) ) ;
консоль . log ( me . getJob ( ) ) ;