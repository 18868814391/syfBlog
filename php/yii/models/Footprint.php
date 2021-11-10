<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "{{%footprint}}".
 *
 * @property int $id
 * @property string $admin 账户
 * @property string $Thename 昵称
 * @property string $content 内容
 * @property string $talkTo 向谁说
 * @property string $belong 所属哪个id下的回复
 * @property string $state 状态，是否私密
 * @property string $state1 备用状态1
 * @property string $state2 备用状态2
 * @property string $updataTime
 */
class Footprint extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{%footprint}}';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['admin', 'Thename', 'talkTo', 'belong', 'state', 'state1', 'state2', 'updataTime'], 'string', 'max' => 200],
            [['content'], 'string', 'max' => 9999],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'admin' => 'Admin',
            'Thename' => 'Thename',
            'content' => 'Content',
            'talkTo' => 'Talk To',
            'belong' => 'Belong',
            'state' => 'State',
            'state1' => 'State1',
            'state2' => 'State2',
            'updataTime' => 'Updata Time',
        ];
    }
}
