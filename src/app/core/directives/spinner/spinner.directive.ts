import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { SpinnerService } from '@core/services/spinner/spinner.service';
import { Subject, takeUntil } from 'rxjs';

@Directive({
  selector: '[appSpinner]'
})
export class SpinnerDirective implements OnInit, OnDestroy {
  private readonly _destroying$ = new Subject<void>();
  constructor(
    private SpinnerService: SpinnerService,
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    this.listenObserver();
  }

  listenObserver() {
    this.SpinnerService.getShowSpinner()
      .pipe(takeUntil(this._destroying$))
      .subscribe((showSpinner) => {

        if (showSpinner) {
          this.showSpinner();
        };

        if (!showSpinner) {
          this.hidenSpinner();
        };

      })
  }


  showSpinner() {
    this.renderer.removeClass(this.elementRef.nativeElement, 'inactive');
  }

  hidenSpinner() {
    this.renderer.addClass(this.elementRef.nativeElement, 'inactive');
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
}
