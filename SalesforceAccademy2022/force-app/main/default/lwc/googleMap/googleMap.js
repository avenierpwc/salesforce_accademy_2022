import { LightningElement, track, api } from 'lwc';

export default class GoogleMap extends LightningElement {

    @track _street;

    @api
    get street() {
        return this._street;
    }
    set street(street) {
        this._street = street;
    }

    @track _city;

    @api
    get city() {
        return this._city;
    }
    set city(city) {
        this._city = city;
    }

    @track _country;

    @api
    get country() {
        return this._country;
    }
    set country(country) {
        this._country = country;
    }

    @track _province;
    @api
    get province() {
        return this._province;
    }
    set province(province) {
        this._province = province;
    }
    
    @track _postalCode;
    @api
    get postalCode() {
        return this._postalCode;
    }
    set postalCode(postalCode) {
        this._postalCode = postalCode;
    }

    @track mapMarkers = [
        {
            location: {
                Street: this._street,
                City: this._city,
                Country: this._country,
                PostalCode: this._postalCode,
                State: this._province
            },
            title: 'The Landmark Building',
            description:
                'Historic <b>11-story</b> building completed in <i>1916</i>',
        },
    ];
    @track zoomLevel;

    @track addressFill = false;

    genericInputChange(event){
        console.log('Street => ' , event.target.street);
        console.log('City => ' , event.target.city);
        console.log('Province => ' , event.target.province);
        console.log('Country => ' , event.target.country);
        console.log('postal Code => ' , event.target.postalCode);

        this.street = event.target.street === "" ? null : event.target.street;
        this.city = event.target.city === "" ? null : event.target.city;
        this.country = event.target.country === "" ? null : event.target.country;
        this.province = event.target.province === "" ? null : event.target.province;
        this.postalCode = event.target.postalCode === "" ? null : event.target.postalCode;


        this.mapMarkers = [
            {
                location: {
                    Street: this._street,
                    City: this._city,
                    Country: this._country,
                    PostalCode: this._postalCode,
                    State: this._province
                },
                title: 'The Landmark Building',
                description:
                    'Historic <b>11-story</b> building completed in <i>1916</i>',
            },
        ];
        this.zoomLevel = 15;

    }
}