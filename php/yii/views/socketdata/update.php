<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\Models\Socketdata */

$this->title = 'Update Socketdata: ' . $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Socketdatas', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="socketdata-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
