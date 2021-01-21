
<?php
$a = array(
  "Peleas de Arribas", "Peleas de Abajo", "Los Barrios", "Sevilla", "Tomares", "Manilva", "Castilleja de la Cuesta",
  "Zahara de los Atunes", "Sanlúcar la Mayor", "Úbera", "Tocina"
);

$localidad = $_REQUEST["localidad"];
$ciudad = "";

if ($localidad !== "") {
  $localidad = strtolower($localidad);
  $long = strlen($localidad);

  foreach ($a as $loc) {
    if (stristr($localidad, substr($loc, 0, $long))) {
      if ($ciudad === "") {
        $ciudad = $loc;
      } else {
        $ciudad = "$ciudad, $loc";
      }
    }
  }
}

echo ($ciudad === "") ? "NO" : "SI";