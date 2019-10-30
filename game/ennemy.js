var Ennemy = function(name, color, position, direction) {

    this.name = name;
    this.position = position;
    this.life = 3;
    this.bullets = new Array();
    this.direction = direction;
    this.speed = 0;

    this.material = new THREE.MeshLambertMaterial({
        color: color,
        });

    bumperMesh = new THREE.Mesh(new THREE.CylinderGeometry(0, 10, 10, 12, 12, false), this.materialBumper);
    bumperMesh.rotation.x = Math.PI / 2 ;

    cube = new THREE.CubeGeometry(10,12,12);
    //sphere = new THREE.SphereGeometry(6, 8, 8);
    //THREE.GeometryUtils.merge(cube, bumperMesh);

    //canon = new THREE.CubeGeometry(3, 3, 15);
    //THREE.GeometryUtils.merge(canon, sphere);

    this.graphic = new THREE.Mesh(cube, this.material);
    this.graphic.position.z = 6;
    this.graphic.position.x = position.x;
    this.graphic.position.y = position.y;
};

Ennemy.prototype.dead = function () {
    this.graphic.position.z = this.position.z-6;
}

Ennemy.prototype.move = function () {

    ennemy1.graphic.position.x +=1;

    var x = ennemy1.graphic.position.x;

    if ( x > WIDTH / 2 -1)
        ennemy1.graphic.position.x = - WIDTH / 2;
    
};

