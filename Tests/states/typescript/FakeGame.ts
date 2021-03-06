/// <reference path="../../../Phaser/Game.ts" />
/// <reference path="../../../Phaser/State.ts" />

class FakeGame extends State {

    constructor(game: Game) {

        super(game);

    }

    private car: Phaser.Sprite;
    private bigCam: Phaser.Camera;

    public init() {

        this.loader.addImageFile('track', '../../assets/games/f1/track.png');
        this.loader.addImageFile('car', '../../assets/games/f1/car1.png');

        this.loader.load();

    }

    public create() {

        this.camera.setBounds(0, 0, this.stage.width, this.stage.height);
        this.createSprite(0, 0, 'track');

        this.car = this.game.createSprite(180, 298, 'car');
        this.car.rotation = 180;
        this.car.maxVelocity.setTo(150, 150);

        this.bigCam = this.createCamera(640, 0, 100, 200);
        this.bigCam.follow(this.car, Camera.STYLE_LOCKON);
        this.bigCam.setBounds(0, 0, this.stage.width, this.stage.height);
        this.bigCam.showBorder = true;
        this.bigCam.borderColor = 'rgb(0,0,0)';
        this.bigCam.scale.setTo(2, 2);

    }

    public update() {

        if (this.input.keyboard.isDown(Keyboard.LEFT))
        {
            this.car.rotation -= 4;
        }
        else if (this.input.keyboard.isDown(Keyboard.RIGHT))
        {
            this.car.rotation += 4;
        }

        if (this.game.input.keyboard.isDown(Keyboard.UP))
        {
            this.car.velocity.copyFrom(this.math.velocityFromAngle(this.car.angle, 150));
        }
        else
        {
            this.car.velocity.copyFrom(this.math.velocityFromAngle(this.car.angle, 60));
        }

    }

}
