<?php

class Controller_formulario {

    public function validar($dados) {
        echo '<p>chegou na funcao validar ';
        /*
         * a senha deve ser compaarada já com com sha1 ou md5
         */
        if ((isset($_POST['usuario']) && $_POST['usuario'] == 'teste') &&
                (isset($_POST['password']) && $_POST['password'] = '123456')) {
            var_dump($_POST['coffee']);
            echo '</p>';
            echo '<p>';
            var_dump($dados);
            echo '</p>';

            header('Location:../index.html');
        } else if ($_POST['coffee'] == 10) {
            return true;
        }
    }

    public function logar($dados) {
        echo '<p>chegou na funcao logar';
        var_dump($_POST);
        echo '</p>';
        echo '<p>';
        var_dump($dados);
        echo '</p>';
        die('fim debug');
    }

}
