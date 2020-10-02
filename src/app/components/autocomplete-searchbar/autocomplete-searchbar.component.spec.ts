import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AutocompleteSearchbarComponent } from "./autocomplete-searchbar.component";

describe('Autocomplete Searchbar Component', () => {

    let app: AutocompleteSearchbarComponent;
    let fixture: ComponentFixture<AutocompleteSearchbarComponent>;
    let element: HTMLInputElement;
    //Event dispatcher
    let e = document.createEvent('HTMLEvents');
    e.initEvent('keyup', false, true);

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AutocompleteSearchbarComponent
            ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(AutocompleteSearchbarComponent);
            app = fixture.debugElement.componentInstance;
            element = (<HTMLInputElement>document.getElementById('autocomplete-searchbar'));
            
        });
    }));

    it('It should clean search strings from whitespaces and special characters', async(() => {
        expect(app.cleanText('    Hello!?=)(/&%$#)    ').length).toEqual(5);
    }));    

    it('It should NOT search before 500ms debounce time', async(() => {
        jasmine.clock().install();
        fixture.detectChanges();
        spyOn(app, 'doSearch');

        element.value = "Bug";
        element.dispatchEvent(e);
        jasmine.clock().tick(100);
        expect(app.doSearch).toHaveBeenCalledTimes(0);
        jasmine.clock().uninstall();
    }));

    it('It should NOT search if text is 1 or 2 characters long', async(() => {
        jasmine.clock().install();
        fixture.detectChanges();
        spyOn(app, 'doSearch');

        element.value = "Bu";
        element.dispatchEvent(e);
        jasmine.clock().tick(501);
        expect(app.doSearch).toHaveBeenCalledTimes(0);
        jasmine.clock().uninstall();
    }));

    it('It should DO search if text is more than 2 characters long', async(() => {
        jasmine.clock().install();
        fixture.detectChanges();
        spyOn(app, 'doSearch');

        element.value = "Bug";
        element.dispatchEvent(e);
        jasmine.clock().tick(501);
        expect(app.doSearch).toHaveBeenCalledTimes(1);
        jasmine.clock().uninstall();
    }));


});
