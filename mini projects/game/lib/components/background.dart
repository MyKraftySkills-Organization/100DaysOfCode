import 'dart:ui';
import 'package:flame/sprite.dart';
import 'package:game/controllers/gameController.dart';

class Background {
  GameController game;
  Sprite bgSprite;
  Rect bgRect;
  Background(this.game) {
    bgSprite = Sprite('bg.jpg');
    bgRect = Rect.fromLTWH(0, 0, game.screenSize.width, game.screenSize.height);
  }

  render(Canvas c) {
    bgSprite.renderRect(c, bgRect);
  }

  update(double t) {}
}
