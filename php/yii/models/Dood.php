<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "{{%dood}}".
 *
 * @property int $id
 * @property string $content
 * @property string $msg
 * @property string $Thename
 * @property string $updataTime
 */
class Dood extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{%dood}}';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['content'], 'string'],
            [['msg'], 'string', 'max' => 600],
            [['Thename', 'updataTime'], 'string', 'max' => 200],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'content' => 'Content',
            'msg' => 'Msg',
            'Thename' => 'Thename',
            'updataTime' => 'Updata Time',
        ];
    }
}
