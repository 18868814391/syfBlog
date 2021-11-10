<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "{{%socketdata}}".
 *
 * @property int $id
 * @property string $adm
 * @property string $content
 * @property string $Thename
 * @property string $updataTime
 */
class Socketdata extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{%socketdata}}';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['adm', 'Thename', 'updataTime'], 'string', 'max' => 200],
            [['content'], 'string', 'max' => 600],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'adm' => 'Adm',
            'content' => 'Content',
            'Thename' => 'Thename',
            'updataTime' => 'Updata Time',
        ];
    }
}
