<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "{{%lightnovel}}".
 *
 * @property int $id
 * @property string $title
 * @property string $content
 * @property string $updataTime
 * @property string $state
 */
class Lightnovel extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{%lightnovel}}';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['title', 'content'], 'required'],
            [['content'], 'string'],
            [['title', 'updataTime', 'state'], 'string', 'max' => 200],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title' => 'Title',
            'content' => 'Content',
            'updataTime' => 'Updata Time',
            'state' => 'State',
        ];
    }
}
