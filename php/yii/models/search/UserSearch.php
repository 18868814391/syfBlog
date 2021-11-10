<?php

namespace app\models\search;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\Models\User;

/**
 * UserSearch represents the model behind the search form of `app\Models\User`.
 */
class UserSearch extends User
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id'], 'integer'],
            [['adm', 'code', 'Thename', 'head_url', 'phone', 'birth_day', 'level', 'state1', 'state2'], 'safe'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = User::find();

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'id' => $this->id,
        ]);

        $query->andFilterWhere(['like', 'adm', $this->adm])
            ->andFilterWhere(['like', 'code', $this->code])
            ->andFilterWhere(['like', 'Thename', $this->Thename])
            ->andFilterWhere(['like', 'head_url', $this->head_url])
            ->andFilterWhere(['like', 'phone', $this->phone])
            ->andFilterWhere(['like', 'birth_day', $this->birth_day])
            ->andFilterWhere(['like', 'level', $this->level])
            ->andFilterWhere(['like', 'state1', $this->state1])
            ->andFilterWhere(['like', 'state2', $this->state2]);

        return $dataProvider;
    }
}
