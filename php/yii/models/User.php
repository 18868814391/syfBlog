<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "{{%user}}".
 *
 * @property int $id
 * @property string $adm
 * @property string $code
 * @property string $Thename
 * @property string $head_url
 * @property string $phone
 * @property string $birth_day
 * @property string $level
 * @property string $state1
 * @property string $state2
 */
class User extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{%user}}';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['adm', 'code', 'Thename', 'phone', 'birth_day', 'level', 'state1', 'state2'], 'string', 'max' => 200],
            [['head_url'], 'string', 'max' => 600],
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
            'code' => 'Code',
            'Thename' => 'Thename',
            'head_url' => 'Head Url',
            'phone' => 'Phone',
            'birth_day' => 'Birth Day',
            'level' => 'Level',
            'state1' => 'State1',
            'state2' => 'State2',
        ];
    }
}
