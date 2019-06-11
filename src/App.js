import React from 'react';
import PhoneCatalog from './components/PhoneCatalog';
import PhoneViewer from './components/PhoneViewer'
import ShoppingCart from './components/ShoppingCart'
import FilterPhones from './components/FilterPhones'
import SortPhones from './components/SortPhones'


import './App.css';

class PhoneApp extends React.Component{

  constructor(){
    super();
    this.url = 'https://mate-academy.github.io/phone-catalogue-static/api/';
    this.state = {
         phones : [],
         phoneViewerHide: true,
         pagePhone:'',
         selectedPhones:{}
    };

    this.functions = {};
    this.arrayFunctions = [
        this.clickedPhone,
        this.backToCatalog,
        this.addPhone,
        this.removePhone,
        this.filter,
        this.sort
    ].map((func)=>{
        return func.bind(this)
    });
    this.arrayFunctions.forEach((func)=>{
         const propName = func.name.slice(6, func.name.length);
         return this.functions[propName] = func;
     });

  }
    clickedPhone(id){
        this.setState({
            phoneViewerHide: false,
            pagePhone: id
        });
    }

    backToCatalog(){
        this.setState({
            phoneViewerHide: true
        })
    }

    addPhone(id){
      const copySelectedPhones ={...this.state.selectedPhones},
      keys = Object.keys(copySelectedPhones);

      if(keys.includes(id)){
          copySelectedPhones[id]++;
      }else {
          copySelectedPhones[id]=1;
      }
      this.setState({
            selectedPhones: copySelectedPhones,
        });

      }

    removePhone(id){
        const countMinus = {...this.state.selectedPhones};

        for(let k in countMinus){
            if(id === k){
                countMinus[k] = countMinus[k]-1;
            }
        }

        if(countMinus[id]<1){
            delete countMinus[id];
            this.setState({selectedPhones: countMinus});
        }
        this.setState({selectedPhones: countMinus});
    }

     filter(event){
         const phones = [...this.state.phones],
         filteredPhones = phones.filter((phone)=>{
                 return phone.id.toLowerCase().includes(event.target.value.toLowerCase())
         });

         if(event.target.value===''){
             this.getPhones();

         }else{
             this.setState({
                 phones: filteredPhones
             })
         }
     }

  sort(event){
       const order = event.target.value,
             phones = [...this.state.phones];

       let sortedPhonesByOrder;

      function compareString(phoneA, phoneB){
          const phoneAname = phoneA.name.toLowerCase(),
              phoneBname = phoneB.name.toLowerCase();
          if(phoneAname<phoneBname){
              return -1;
          }
          if(phoneAname>phoneBname){
              return 1;
          }
          return 0;
      }

      function compareNumber(phoneA, phoneB){
          return phoneA.age - phoneB.age
      }

      if(order ==='name'){
         sortedPhonesByOrder = phones.sort(compareString);
       }
      if(order ==='age'){
          sortedPhonesByOrder = phones.sort(compareNumber);
      }

      this.setState({phones: sortedPhonesByOrder})
  }

  async getPhones(){
      const response = await fetch(this.url + 'phones.json');
      const json = await response.json();
      this.setState({phones: json});
  }

   componentDidMount() {
        this.getPhones()
    }

  render(){



      let component = <PhoneCatalog
          click={this.functions['clickedPhone']}
          addPhone ={this.functions['addPhone']}
          goToViewer = {this.functions['goToPagePhone']}
          phones = {this.state.phones}
      />;

      if(!this.state.phoneViewerHide) {
          component = <PhoneViewer
          backToCatalog={this.functions['backToCatalog']}
          addPhone ={this.functions['addPhone']}
          selected ={this.state.pagePhone}
          phones = {this.state.phones}
           />
      }

      return (
          <div className="App">
              <div className="row">
                  <div className="col-md-2">
                      <section>
                          <FilterPhones search={this.functions['filter']}/>
                          <SortPhones sort={this.functions['sort']}/>
                      </section>

                      <section>
                       <ShoppingCart
                           selectedPhones={this.state.selectedPhones}
                           removePhone ={this.functions['removePhone']}
                       />
                      </section>
                  </div>
                  <div className="col-md-10"
                  >
                      { component }
                  </div>
              </div>
          </div>
      );
  }
}

export default PhoneApp;
