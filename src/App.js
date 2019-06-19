import React from 'react';
import PhoneCatalog from './components/PhoneCatalog';
import PhoneViewer from './components/PhoneViewer'
import ShoppingCart from './components/ShoppingCart'
import FilterPhones from './components/FilterPhones'
import SortPhones from './components/SortPhones'

import './App.css';

class PhoneApp extends React.Component {

    constructor() {
        super();
        this.url = 'https://mate-academy.github.io/phone-catalogue-static/api/phones';
        this.state = {
            phones: [],
            phoneViewerHide: true,
            pagePhone: '',
            selectedPhones: {},
            phoneImages: []
        };

        this.clickedPhone = this.clickedPhone.bind(this);
        this.backToCatalog = this.backToCatalog.bind(this);
        this.addPhone = this.addPhone.bind(this);
        this.removePhone = this.removePhone.bind(this);
        this.sort = this.sort.bind(this);

        // this.arrayFunctions = [
        //     this.clickedPhone,
        //     this.backToCatalog,
        //     this.addPhone,
        //     this.removePhone,
        //     this.sort
        // ].map((func)=>{
        //     return func.bind(this)
        // });
        //   this.functions = {};
        //
        //   this.arrayFunctions.forEach((func)=>{
        //       const propName = func.name.slice(6, func.name.length);
        //       this.functions[propName] = func;
        //       return this.functions;
        //   });
        //
    }
    clickedPhone(id) {
        this.setState({
            phoneViewerHide: false,
            pagePhone: id
        });
    }

    backToCatalog() {
        this.setState({
            phoneViewerHide: true
        })
    }

    addPhone(id) {
        const copySelectedPhones = {...this.state.selectedPhones},
            keys = Object.keys(copySelectedPhones);

        if (keys.includes(id)) {
            copySelectedPhones[id]++;
        } else {
            copySelectedPhones[id] = 1;
        }
        this.setState({
            selectedPhones: copySelectedPhones,
        });

    }

    removePhone(id) {
        const countMinus = {...this.state.selectedPhones};

        for (let k in countMinus) {
            if (id === k) {
                countMinus[k] = countMinus[k] - 1;
            }
        }

        if (countMinus[id] < 1) {
            delete countMinus[id];
            this.setState({selectedPhones: countMinus});
        }
        this.setState({selectedPhones: countMinus});
    }

    sort(event) {
        const order = event.target.value,
            phones = [...this.state.phones];

        let sortedPhonesByOrder;

        function compareString(phoneA, phoneB) {
            const phoneAname = phoneA.name.toLowerCase(),
                phoneBname = phoneB.name.toLowerCase();
            if (phoneAname < phoneBname) {
                return -1;
            }
            if (phoneAname > phoneBname) {
                return 1;
            }
            return 0;
        }

        function compareNumber(phoneA, phoneB) {
            return phoneA.age - phoneB.age
        }

        if (order === 'name') {
            sortedPhonesByOrder = phones.sort(compareString);
        }
        if (order === 'age') {
            sortedPhonesByOrder = phones.sort(compareNumber);
        }

        this.setState({phones: sortedPhonesByOrder})
    }

    getPhones = async (event) => {
        let searchPhone,
            phones;
        if(event) {
            searchPhone = event.target.value
        }

        const response = await fetch(this.url + '.json');
        const json = await response.json();

        if(searchPhone){
            phones = json.filter((phone)=>{
                    return phone.name.toLowerCase()
                            .includes(searchPhone.toLowerCase())
                }
            );
        }else {
            phones = json;
        }

        this.setState({phones: phones});
    };

    getPhoneImages = async (phoneId) => {
        const response = await fetch(this.url + '/' + phoneId + '.json');
        const json = await response.json();

        this.setState({phoneImages: json['images']});
    };

    componentDidMount() {
        this.getPhones()
    }

    render() {

        let component = <PhoneCatalog
            getPhoneImg={this.getPhoneImages}
            click={this.clickedPhone}
            addPhone={this.addPhone}
            phones={this.state.phones}
        />;

        if (!this.state.phoneViewerHide) {
            component = <PhoneViewer
                backToCatalog={this.backToCatalog}
                addPhone={this.addPhone}
                selected={this.state.pagePhone}
                phones={this.state.phones}
                phoneImages={this.state.phoneImages}
            />
        }

        return (
            <div className="App">
                <div className="row">
                    <div className="col-md-2">
                        <section>
                            <FilterPhones search={this.getPhones}/>
                            <SortPhones sort={this.sort}/>
                        </section>

                        <section>
                            <ShoppingCart
                                selectedPhones={this.state.selectedPhones}
                                removePhone={this.removePhone}
                            />
                        </section>
                    </div>
                    <div className="col-md-10"
                    >
                        {component}
                    </div>
                </div>
            </div>
        );
    }
}

export default PhoneApp;
