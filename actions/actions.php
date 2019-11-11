<?php
include '../controller/controller_formulario.php';
echo    'chegou no action';
switch ($_POST['action']) {
    case 'salvar':
        $objForm = new Controller_formulario();
        echo '<p>';
        var_dump($_POST);
        echo '</p>';
        die('fim debug');
        break;
    case 'validar':
        $objForm = new Controller_formulario();
        echo '<p>';
        var_dump($_POST);
        echo '</p>';
        echo '<p>';
        var_dump($objForm->validar_formulario_um($_POST));
        echo '</p>';
        die('fim debug');

        break;

    default:
        break;
}