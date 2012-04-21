/**
 * Created with PyCharm.
 * User: user
 * Date: 12/4/21
 * Time: 上午11:18
 * To change this template use File | Settings | File Templates.
 */
function rotate_rect(context, rect){
    context.save();

    context.beginPath();
    //
    context.translate(rect.x, rect.y);  // move far away

    context.rotate(angel* Math.PI/180);  // rotate
    context.translate(-0.5 * rect.width,-0.5*rect.height); //Move To Center
    context.rect(0, 0, rect.width, rect.height);

    context.closePath();
    context.fill();
    console.log(rect.x + "" + rect.y);
}