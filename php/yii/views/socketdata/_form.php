<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\Models\Socketdata */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="socketdata-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'adm')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'content')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'Thename')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'updataTime')->textInput(['maxlength' => true]) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
