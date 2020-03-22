function Snake() {
    this.x = 200;
    this.y = 200;
    this.xspeed = 0;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];


    this.death = function () {
        for (var i = 0; i < this.tail.length; i++) {
            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            if (d < 1) {
                _playerDead = true; // sketch global var
                background(0,17,0);
                document.getElementById("score").innerHTML = "YOU DIED, eat to restart pts: <b>" + score + "</b>";

            }
        }
    }

    this.eat = function(pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d<1) {
            Dot.add(this.x, this.y);
            this.total++;
            return true;
        } else {
            return false;
        }
    }

    this.dir = function(x,y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    this.update = function() {
        if (this.total === this.tail.length) {
            for (var i = 0; i < this.tail.length-1; i++) {
                this.tail[i] = this.tail[i+1];
            }
        }
        this.tail[this.total-1] = createVector(this.x, this.y);


        this.x = this.x + this.xspeed*scaleGrid;
        this.y = this.y + this.yspeed*scaleGrid;

        this.x = constrain(this.x, 0, width-scaleGrid);
        this.y = constrain(this.y, 0, height-scaleGrid);

    }

    this.show = function() {
        for (var i = 0; i < this.total; i++) {
            if (i%2) {
                fill(255);
            } else {
                fill(255);
            }

            rect(this.tail[i].x, this.tail[i].y, scaleGrid, scaleGrid);
        }

        fill(255);
        rect(this.x, this.y, scaleGrid,scaleGrid);

    }
}