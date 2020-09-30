import 'dart:ui';

import 'package:flame/flame.dart';
import 'package:flame/game/game.dart';
import 'package:game/components/background.dart';

class GameController extends Game {
  Size screenSize;
  double tileSize;
  Background bg;
  GameController() {
    initialize();
  }

  initialize() async {
    resize(await Flame.util.initialDimensions());
    bg = new Background(this);
  }

  resize(Size size) {
    screenSize = size;
    tileSize = screenSize.width / 16;
  }

  render(Canvas canvas) {
    bg.render(canvas);
  }

  update(double t) {}
}
