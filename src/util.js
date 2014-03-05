var GameTimer = (function() {
	function GameTimer() {
		this.lt = this.getMillis();
		this.now = this.lt;
		this.ltr = this.now;
	}

	GameTimer.prototype = {
		lt : 0,
		now : 0,
		delta : 0,
		msPt : 30 / 1000.0,

		ltr : 0,
		ticks : 0,
		frames : 0,

		getMillis : function() {
			return new Date().getTime();
		},

		start : function() {
			var _this = this;
			window.requestAnimationFrame(function() {
				_this.update();
			});
		},

		update : function(timer) {
			this.now = this.getMillis();
			this.delta += (this.now - this.lt) * this.msPt;
			this.lt = this.now;

			this.delta = Math.min(this.delta, 10.0);
			while(this.delta >= 1) {
				update();
				this.ticks++;
				this.delta--;
			}

			render();
			this.frames++;
			if(this.now - this.ltr >= 1000.0) {
				this.ltr += 1000.0;
				print(this.ticks + " tps, " + this.frames + " fps");
				this.ticks = 0;
				this.frames = 0;
			}

			var _this = this;
			window.requestAnimationFrame(function() {
				_this.update();
			});
		},
	};

	return GameTimer;
})();

var Rect = (function() {
    
    function Rect(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    
    Rect.prototype = {
        x : 0,
        y : 0,
        w : 0,
        h : 0,
        
        intersects: function(rect) {
            if (   this.x + this.w >= rect.x
                && this.x <= rect.x + rect.w
                && this.y + this.h >= rect.y
                && this.y <= rect.y + rect.h) {
                return true;
            } else {
                return false;
            }
        },
    };
    
    return Rect;
})();

function print(o) {
    console.log(o);
}