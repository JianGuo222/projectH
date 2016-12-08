(function() {

      function SVGExpander( el, options ) {
        this.el = el;
        this.init();
      }

      SVGExpander.prototype.init = function() {
        this.trigger = this.el.querySelector( 'button.trigger' );
        this.shapeEl = this.el.querySelector( 'span.morph-shape' );

        var s = Snap( this.shapeEl.querySelector( 'svg' ) );
        this.pathEl = s.select( 'path' );
        this.paths = { 
          reset : this.pathEl.attr( 'd' ),
          open : this.shapeEl.getAttribute( 'data-morph-open' ),
          close : this.shapeEl.getAttribute( 'data-morph-close' )
        };

        this.isOpen = false;
        this.initEvents();
      };

      SVGExpander.prototype.initEvents = function() {
        this.trigger.addEventListener( 'click', this.toggle.bind(this) );
      };

      SVGExpander.prototype.toggle = function() {
        var self = this;

        if( this.isOpen ) {
          this.pathEl.stop().animate( { 'path' : this.paths.close }, 250, mina.easeout, function() {
            self.pathEl.stop().animate( { 'path' : self.paths.reset }, 800, mina.elastic );
          } );
          setTimeout( function() { classie.remove( self.el, 'box--sizeup' ); }, 250 );
        }
        else {
          this.pathEl.stop().animate( { 'path' : this.paths.open }, 250, mina.easeout, function() {
            self.pathEl.stop().animate( { 'path' : self.paths.reset }, 800, mina.elastic );
          } );
          setTimeout( function() { classie.add( self.el, 'box--sizeup' ); }, 250 );
        }
        this.isOpen = !this.isOpen;
      };

      [].slice.call( document.querySelectorAll( '.box--collapser' ) ).forEach( function( el ) { new SVGCollapser(el); } );
      new SVGExpander( document.getElementById( 'expander-1' ) );
      new SVGExpander( document.getElementById( 'expander-2' ) );
      new SVGExpander( document.getElementById( 'expander-3' ) );
      new SVGExpander( document.getElementById( 'expander-4' ) );
    })();		