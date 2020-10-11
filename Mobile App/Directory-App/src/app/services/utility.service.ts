import {Injectable} from '@angular/core';
import {NativeGeocoder} from '@ionic-native/native-geocoder/ngx';

@Injectable({
    providedIn: 'root'
})
export class UtilityService {
    constructor(private nativeGeocoder: NativeGeocoder) {
    }

    sortJsonArrayByVisibilityOrder(array) {
        array.sort((a, b) => a.visibility_order - b.visibility_order);
        return array;
    }

    searchClub(clubs, searchKeyword) {
        return clubs.filter((club) => {
            // tslint:disable-next-line:max-line-length
            return (club.clubName.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1 || this.searchByOfficerProperties(club.officers, searchKeyword));
        });
    }

    searchCouncil(councilData, searchKeyword) {
        return councilData.filter((officer) => {
            // tslint:disable-next-line:max-line-length
            return (officer.designationCategory.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1 || this.searchByOfficerProperties(officer.officers, searchKeyword));
        });
    }

    searchByOfficerProperties(officers, searchKeyword) {
        // tslint:disable-next-line:prefer-const
        let officerList = officers.filter((officer) => {
            return (
                officer.name.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1
                // || officer.email.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1 ||
                // officer.address.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1 ||
                // officer.phone.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1
            );
        });
        return officerList.length > 0;
    }

    getLatLongFromAddress(address) {
        return this.nativeGeocoder.forwardGeocode(address);
    }

    getDateFormatted(date, type) {
        const splitted = date.split('/');
        // tslint:disable-next-line:radix
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        if (type === 'd') {
            return splitted[0];
        } else if (type === 'm') {
            // tslint:disable-next-line:radix
            return months[(parseInt(splitted[1]) - 1)];
        } else if (type === 'y') {
            return splitted[2];
        }
    }

    // Comparer Function
    GetSortOrder(prop) {
        // tslint:disable-next-line:only-arrow-functions
        return function(a, b) {
            if (a[prop] > b[prop]) {
                return 1;
            } else if (a[prop] < b[prop]) {
                return -1;
            }
            return 0;
        };
    }

    sortClubs(clubs) {
        clubs.sort(this.GetSortOrder('clubName'));
    }

}
