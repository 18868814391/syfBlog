<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "{{%heavynovel}}".
 *
 * @property int $id
 * @property string $chapterTitle
 * @property string $paragraphTitle
 * @property string $content
 * @property string $state
 * @property string $updataTime
 */
class Heavynovel extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{%heavynovel}}';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['chapterTitle', 'paragraphTitle', 'content'], 'required'],
            [['content'], 'string'],
            [['chapterTitle', 'paragraphTitle', 'state', 'updataTime'], 'string', 'max' => 200],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'chapterTitle' => 'Chapter Title',
            'paragraphTitle' => 'Paragraph Title',
            'content' => 'Content',
            'state' => 'State',
            'updataTime' => 'Updata Time',
        ];
    }
}
