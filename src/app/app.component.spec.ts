import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from "./app.component";

describe('AppComponent', ()=>{
    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            declarations:[
                AppComponent
            ]
        }).compileComponents();
    }));

    it('Should create the app correctly',()=>{
        const fixture = TestBed.createComponent(AppComponent);
        const app=fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it('Should have as title "React Issues"',()=>{
        const fixture = TestBed.createComponent(AppComponent);
        const app=fixture.debugElement.componentInstance;
        expect(app.title).toEqual("React Issues");
    });

});
